
## Deployment
- install node
- install terraform
- install aws cli
```bash
# Create ./out build folder with static html
npm install
npm run build
```
```bash
# Deploy AWS Infrastructure
aws sso configure
# When prompted to name your profile make sure it matches the profile name in the main.tf file
cd terraform
terraform init
terraform apply
# Go get a coffee because the cloudfront CDN takes a while to deploy
```
- Terraform will output your cloudfront url

cloudfront_domain_name = "xxx.cloudfront.net"