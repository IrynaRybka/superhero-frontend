import { useState, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import noPoster from '../../noImg/noPosterHero.jpg';
import css from './HeroSearch.module.css';
import { getHeroList } from 'api/fetchApiHero';


export const Hero = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [heroes, setHeroes] = useState([]);
  const queryHeroName = searchParams.get('name') ?? "";

  useEffect(() => {
    const fetchHeroesData = async () => {
      try {
        if (queryHeroName) {
          const data = await getHeroList(queryHeroName);
          setHeroes(data.data.data.results);
        }
      } catch (error) {  
        console.error(error.message);
          }
    };
    
    fetchHeroesData();
  }, [queryHeroName]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { name: value } : {});
  };

  const visibleMovies = useMemo(() => {
    return heroes.filter(hero =>
      hero.name.toLowerCase().includes(queryHeroName.toLowerCase())
    );
  }, [queryHeroName, heroes]);

  return (
    <main>
      <SearchBox value={queryHeroName} onChange={changeQuery} />
      <ul className={css.movies_list}>
        {visibleMovies.length > 0 ? (
          visibleMovies.map(hero => {
            let poster = '';
            const path = hero.thumbnail.path;
            const extension = hero.thumbnail.extension;
            if (hero.thumbnail === null) {
              poster = noPoster;
            } else {
              poster = `${path}.${extension}`;
            }
            return (
              <NavLink
              style={{
                maxWidth: "280px",
                display: "block",
              }}
                to={`${hero.id}`}
                key={hero.id}
                state={{ from: location }}
              >
                <img
                  src={poster}
                  width="280"
                  height="420"
                  alt={hero.name}
                />
                <h2>{hero.name}</h2>
              </NavLink>
            );
          })) : (<p>We don`t have yet hero of marvel with this name. Try to write something write.</p>)}
      </ul>
    </main>
  );
};
