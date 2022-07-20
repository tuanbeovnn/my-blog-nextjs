import LoadingSkeleton from './LoadingSkeleton'

export default function MovieCardSkeleton() {
    return (
        <div className="flex flex-col rounded-lg h-full select-none">

            <LoadingSkeleton width="100%" height="250px" radius="15px" className="mb-5">

            </LoadingSkeleton>
           
        </div>
    )
}
