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

  const [position, setPostion] = useState(0);

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
    <div className="container pt-24 flex max-w-screen-2xl relative">
      <div className="flex flex-row overflow-hidden">
        {imgArray.map((img) => {
          return (
            <a href={img.adLink}>
              <img
                className="max-w-screen-2xl w-screen max-h-[400px]"
                src={img.source}
                alt={img.title}
                key={img.id}
              />
            </a>
          );
        })}
      </div>
      <div className="absolute">
        <button
          onClick={() => setPostion(position)}
          className="w-20 text-white text-2xl bg-slate-800 bg-opacity-25"
        >
          &lt;
        </button>
        <button
          onClick={() => setPostion(position - 1)}
          className="w-20 text-white text-2xl bg-slate-800 bg-opacity-25"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
