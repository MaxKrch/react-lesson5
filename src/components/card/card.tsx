import type { CardProps } from './card.type'

const Card = ({ poster, children }: CardProps) => {
  return (
    <article className="bg-white w-[300px] min-h-[450px] p-1 shadow-lg">
      {poster && (
        <div className="w-full h-[150px]">
          <img className="object-cover w-full h-full" src={poster} />
        </div>
      )}
      {children && <div className="p-2  flex flex-col gap-2">{children}</div>}
    </article>
  )
}

export default Card
