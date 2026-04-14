import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import CardBody from '../Cards/CardBody';
import CardFooter from '../Cards/CardFooter';
import { useNavigate } from 'react-router';

const PokemonCard = (
  {
    data
  }
) => {
  const redirectTo = useNavigate();

  const getStat = (statName) => (
    data?.stats?.find((item) => item?.stat?.name === statName)?.base_stat ?? '-'
  );

  const hp = getStat('hp');
  const atk = getStat('attack');
  const def = getStat('defense');

  const types = data?.types?.map((item) => item?.type?.name).filter(Boolean) ?? [];
  const primaryType = data?.types?.find((item) => item?.slot === 1)?.type?.name ?? types[0];

  const headerTypeColor = {
    normal: 'bg-stone-500',
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-500',
    grass: 'bg-green-600',
    ice: 'bg-cyan-400',
    fighting: 'bg-red-700',
    poison: 'bg-violet-600',
    ground: 'bg-amber-600',
    flying: 'bg-sky-500',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-600',
    rock: 'bg-yellow-700',
    ghost: 'bg-indigo-700',
    dragon: 'bg-indigo-500',
    dark: 'bg-neutral-800',
    steel: 'bg-slate-500',
    fairy: 'bg-rose-400'
  };

  const headerBgClass = headerTypeColor[primaryType] ?? 'bg-green-600';

  const formatText = (value) => (
    value
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );

  const imageUrl =
    data?.sprites?.other?.['official-artwork']?.front_default ||
    data?.sprites?.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;

  return (
    <Card
      cardHeader={(
        <CardHeader>
          <div className={`flex flex-col justify-center items-center w-full ${headerBgClass} p-2`}>
            <img
              className="w-24 h-24 translate-y-1/3 object-cover rounded-full shadow-2xl bg-white"
              src={imageUrl}
              alt={data?.name || 'pokemon'}
            />
          </div>
        </CardHeader>
      )}
      cardBody={(
        <CardBody>
          <section className="mt-8 px-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-300">{`#${data?.id ?? '-'}`}</span>
              <span className="flex gap-2">
                {types.map((typeName) => (
                  <span key={typeName} className={`inline-block px-3 py-2 ${headerTypeColor[typeName] ?? 'bg-green-600'} text-white rounded-sm`}>
                    {formatText(typeName)}
                  </span>
                ))}
              </span>
            </div>
            <div>
              <h2 className="text-center py-4 text-2xl font-bold text-white">
                {formatText(data?.name) || '-'}
              </h2>
            </div>
            <div className="flex rounded-xl bg-teal-100 px-2 py-4 justify-center w-full">
              <span className="flex flex-1 flex-col items-center">
                <span className="text-red-800 font-bold">HP</span>
                <span>{hp}</span>
              </span>
              <span className="flex flex-1 flex-col  items-center">
                <span className="text-red-800 font-bold">ATK</span>
                <span>{atk}</span>
              </span>
              <span className="flex flex-1 flex-col  items-center">
                <span className="text-blue-600 font-bold">DEF</span>
                <span>{def}</span>
              </span>
            </div>
          </section>
        </CardBody>
      )}
      cardFooter={(
        <CardFooter>
          <section className="flex">
            <button
              className="flex-1 mx-4 mt-8 mb-2 px-4 py-3 bg-green-600 text-white font-bold rounded-sm"
              onClick={() => { redirectTo(`/pokemon/${data?.id}`) }}
            >Detalles</button>
          </section>
        </CardFooter>
      )}
    />
  );
}

export default PokemonCard;