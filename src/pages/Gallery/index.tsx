import { AlbumCard, Heading, Loading, Error } from "../../components";
import { useQuery } from "../../hooks";

export const Gallery = () => {
  const { data, loading, error } = useQuery<any>(`/album/?amount=1`);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Error />
      </div>
    );
  }
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col m-8 space-y-4 items-center">
      <Heading label="Check out our most popular galleries" />

      <div className="mt-12 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {data.results.map((e: any) => {
          return (
            <AlbumCard
              image={
                "https://mcb-production.up.railway.app" + e.images[0].image
              }
              title={e.title}
              album_id={e.slug}
            />
          );
        })}
      </div>
    </div>
  );
};
