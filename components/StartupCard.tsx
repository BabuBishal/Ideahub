import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    title,
    author,
    _createdAt,
    views,
    _id,
    category,
    image,
    description,
  } = post;
  // console.log(post)
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span>{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <div>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </div>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || "https://placehold.co/48"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <div>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image || "https://placehold.co/600x400.svg"}
          alt="placeholder"
          width={80}
          height={41}
          className="startup-card_img"
        />
      </div>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
