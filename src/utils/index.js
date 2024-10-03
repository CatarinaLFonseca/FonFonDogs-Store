export const handleImages = (path) =>  {
    return new URL(path, import.meta.url).href
}
