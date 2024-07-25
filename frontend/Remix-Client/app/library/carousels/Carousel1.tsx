import { useEffect, useState } from "react";

// Arguments are the name of the JSON attributes of the fetched array.
export default function CarouselOne({
  APIurl,
  imgSrc,
  imgTitle,
  id,
  advertisementLink,
}: {
  APIurl: string;
  imgSrc: string;
  imgTitle: string;
  id: string;
  advertisementLink: string;
}) {
  // fetches the images from the Backend

  const [imgArray, setArray] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(APIurl)
          .then((res) => res.json())
          .then((data) => {
            setArray(data);
            console.log(data);
          });
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container pt-24">
      <ul className="flex flex-col items-center w-screen">
        {imgArray.map((img) => {
          return (
            <li>
              <a href={img.adLink}>
                <img src={img.source} alt={img.title} key={img.id} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
