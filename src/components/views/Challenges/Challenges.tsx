import { FC, useEffect, useState } from 'react';
import {
  dbAdd,
  dbRemove,
  dbUpdate,
  IDailyChallenge,
} from '../../../Firebase';
import {
  StyledAddChallengeContainer,
  StyledChallengesContainer,
} from './styles';
import InputField from '../../pieces/InputField/InputField';
import ItemList from '../../pieces/ItemList/ItemList';

export interface IChallengesProps {
  dailyChallenges: IDailyChallenge[];
}

const Challenges: FC<IChallengesProps> = ({ dailyChallenges }): JSX.Element => {
  const [challenges, setChallenges] = useState<IDailyChallenge[]>(dailyChallenges);

  useEffect(() => {
    setChallenges(dailyChallenges);
  }, [dailyChallenges]);

  const createChallenge = (input: string) => {
    const id = challenges.length;
    const payload = {
      id,
      challenge: input,
      completed: false,
    };
    dbAdd(`daily/challenges/${id}`, payload);
  };

  const updateChallenge = (completed: boolean, id: number) => {
    dbUpdate(`daily/challenges/${id}`, { ...challenges[id], completed });
  };

  const deleteChallenge = (id: number) => {
    dbRemove(`daily/challenges/${id}`);
  };

  const mapChallenges = () => challenges.map((challenge: IDailyChallenge) => ({
    id: challenge.id,
    item: challenge.challenge,
    completed: challenge.completed,
  }));

  return (
    <StyledChallengesContainer>
      <ItemList
        items={mapChallenges()}
        updateItem={updateChallenge}
        deleteItem={deleteChallenge}
      />
      <StyledAddChallengeContainer>
        <InputField callback={createChallenge} />
      </StyledAddChallengeContainer>
    </StyledChallengesContainer>
  );
};
export default Challenges;
