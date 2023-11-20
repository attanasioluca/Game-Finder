import noImage from "../assets/no-image-placeholder-6f3882e0.webp"

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;
    const target = "media/"
    const i = url.indexOf(target) + target.length;
    return url.slice(0, i) + "crop/600/400/" + url.slice(i);
}

export default getCroppedImageUrl;