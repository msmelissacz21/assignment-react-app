provider "aws" {
  region = "us-east-2"
  profile = "AWS-cli-user"
}

resource "aws_s3_bucket" "react_app_bucket" {
  bucket = "assignment-react-next-django-app"
  
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.react_app_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownership" {
  bucket = aws_s3_bucket.react_app_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "bucket_access_block" {
  bucket = aws_s3_bucket.react_app_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.bucket_ownership,
    aws_s3_bucket_public_access_block.bucket_access_block,
  ]

  bucket = aws_s3_bucket.react_app_bucket.id
  acl    = "public-read"
}

module "tempalte_files" {
  source = "hashicorp/dir/template"

  base_dir = "../out"
  
}

resource "aws_s3_object" "react_app_files" {
  depends_on = [ aws_s3_bucket_acl.bucket_acl ]
  for_each = module.tempalte_files.files
  bucket = aws_s3_bucket.react_app_bucket.bucket
  key    = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  content = each.value.content
  acl    = "public-read"
  etag = each.value.digests.md5
}

resource "aws_cloudfront_distribution" "react_app_distribution" {
  origin {
    domain_name = aws_s3_bucket.react_app_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.react_app_bucket.bucket

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.react_app_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.react_app_bucket.bucket

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_identity" "react_app_identity" {
  comment = "Origin Access Identity for my React app"
}

output "s3_bucket_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.react_app_distribution.domain_name
}
