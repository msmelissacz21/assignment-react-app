"use client"
import { useEffect, useState } from "react"
import { API_BASE_URL, API_PORT } from "../const"

export interface UseAboutResponse {
    aboutString1: string
    aboutString2: string
}

// Basic hook calling API without retry logic
export function useAbout() {
    const [useAboutResponse, setUseAboutResponse] = useState<UseAboutResponse>({aboutString1: '', aboutString2: ''})
    const url = `${API_BASE_URL}${API_PORT}/about/`

    useEffect(() => {
        fetch(url).then((resp) => {
            resp.json().then(data => {
                setUseAboutResponse(data as UseAboutResponse)
            })
        })
    }, [])

    return { useAboutResponse }
}