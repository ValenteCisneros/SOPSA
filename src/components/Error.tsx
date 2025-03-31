
export default function Error({children}: {children: React.ReactNode}) {
  return (
    <p className="text-center font-bold bg-red-600 text-white my-4 p-3 text-sm uppercase">{children}</p>
  )
}
