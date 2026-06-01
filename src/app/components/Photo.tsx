type Props = React.ImgHTMLAttributes<HTMLImageElement> & { alt: string };

// Lichte wrapper rond <img> zodat we externe afbeeldings-URL's kunnen
// gebruiken zonder next/image remote-config. Vervang de src later eventueel
// door eigen bestanden in /public/images.
export default function Photo({ alt, ...props }: Props) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} {...props} />;
}
