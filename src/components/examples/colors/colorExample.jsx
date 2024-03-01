export default ({ hex, number, className }) => (
  <div className="flex flex-1 flex-col gap-1">
    <div className={`flex h-16 flex-col justify-between rounded-md px-2 py-1 ${className}`}>
      <div className="font-semibold">{number}</div>
      <div className="text-sm opacity-80">{hex}</div>
    </div>
  </div>
);
