import Image from "next/image";

type EntryProps = {
  created_by: string;
  image: string;
  body: string;
};

const Entry = ({ created_by, image, body }: EntryProps) => {
  return (
    <article className="flex flex-col mt-5">
      <div className="bg-gray-500 rounded-md bg-opacity-10 p-2">
        <p className="italic">{body}</p>
      </div>
      <div className="flex items-center mt-2">
        <Image
          src={image}
          alt={created_by}
          width={40}
          height={40}
          className="object-contain rounded-full"
        />
        <p className="ml-2">{created_by}</p>
      </div>
    </article>
  );
};

export default Entry;
