"use client"
import { useEffect, useState } from "react"
import { API_BASE_URL, API_PORT } from "../const"

interface Photo {
    src: string,
    description: string
}
export interface UsePhotosResponse {
    images: Photo[]
}

// Basic hook calling API without retry logic
export function usePhotos() {
    const [usePhotosResponse, setUsePhotosResponse] = useState<UsePhotosResponse>({images: []})
    const url = `${API_BASE_URL}${API_PORT}/photos/`

    useEffect(() => {
        fetch(url).then((resp) => {
            resp.json().then(data => {
                setUsePhotosResponse(data as UsePhotosResponse)
            })
        })
    }, [])

    return { usePhotosResponse }
}