import { Link } from "@remix-run/react";
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
  const [imgArray, setArray] = useState<any[]>([]);

  const [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(imgArray.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === imgArray.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  // fetches the images from the Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(APIurl)
          .then((res) => res.json())
          .then((data) => {
            setArray(data);
          });
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={"pt-24 flex max-w-full absolute z-10 overflow-hidden"}>
      <div
        className="flex flex-row ease-out duration-40 transition"
        style={{ transform: `translateX(-${current * 33.33}%)` }}
      >
        {imgArray.map((img) => {
          return (
            <Link to={img.adlink}>
              <img
                className="max-w-screen-2xl w-screen max-h-[200px]"
                src={img.source}
                alt={img.title}
                key={img.id}
              />
            </Link>
          );
        })}
      </div>
      <div className="z-10 absolute">
        <button
          onClick={previousSlide}
          className="w-20 text-white text-2xl bg-slate-800 bg-opacity-25"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="w-20 text-white text-2xl bg-slate-800 bg-opacity-25"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
