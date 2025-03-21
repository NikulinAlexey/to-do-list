
interface ErrorProps {
  error: string;
}

function Error({ error }: ErrorProps) {
  return (
    <div className="flex items-center p-4 bg-[#ffebee] border border-[ffcdd2] rounded-lg animation-snake w-full">
      <div className="flex justify-center items-center  shrink-0 w-[30px] h-[30px] bg-high text-white font-bold rounded-full m-4 text-lg">
        !
      </div>
      <div className="text-high text-sm">
        {error ? error : "Произошла ошибка"}
      </div>
    </div>
  );
}

export default Error;
