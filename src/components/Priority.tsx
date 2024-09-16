interface PriorityProps {
  priority: string;
}

function Priority({ priority }: PriorityProps) {
  console.log(priority);
  return <div className="bg-slate-400 w-12 h-12 rounded-full"></div>;
}

export default Priority;
