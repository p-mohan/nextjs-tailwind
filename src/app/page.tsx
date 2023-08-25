import Image from "next/image";
import { feedVideos } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap  gap-6 p-8 flex-1">
      {feedVideos.map((v) => (
        <div
          key={v.channelName + v.title}
          className=" gap-3 w-[300px] flex flex-col"
        >
          <div>
            <Image
              src={v.thumbnailUrl}
              height={200}
              width={300}
              alt={v.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 pl-5">
            <span className="font-semibol text-white">{v.title}</span>
            <div className="text-sm text-zinc-400">
              <div>{v.channelName}</div>
              <div>
                {v.viewCount} - {v.createdAt}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
