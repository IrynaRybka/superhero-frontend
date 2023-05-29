import css from './HeroDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneHero } from 'api/fetchApiHero';

export const HeroDetails = () => {
  const { movieId } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHeroesData = async () => {
      try {
        const data = await getOneHero(movieId);
        setHero(data.data.data.results[0]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchHeroesData();
  }, [movieId]);

  return (
    <div className={css.heroDetails}>
      {hero && (
        <div>
          <h1>{hero.name}</h1>
          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} width="280" alt={hero.name} />
          <p>Stories: {hero.stories.available}</p>
          <div>
            <h2>Series</h2>
            <p>{hero.series.items.map(item => item.name).join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};
