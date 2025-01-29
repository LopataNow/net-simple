/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly REACT_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}