import { cn } from "../libs/utils";

function Loader() {
  const loaderClassName = `after:border-[10px] after:shrink-0 after:border-transparent after:border-t-normal after:rounded-full after:animate-spin after:w-14 after:h-14 after:bg-transparent`;

  return (
    <div
      className={cn(
        "flex justify-center items-center w-full h-full",
        loaderClassName,
        {}
      )}
    ></div>
  );
}

export default Loader;
