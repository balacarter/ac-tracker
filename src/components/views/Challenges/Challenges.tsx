import { FC, useEffect, useState } from 'react';
import {
  addDailyChallenge,
  deleteDailyChallnge,
  IDailyChallenge,
  updateChallengeCompleted,
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
  const [challenges, setChallenges] =
    useState<IDailyChallenge[]>(dailyChallenges);

  useEffect(() => {
    setChallenges(dailyChallenges);
  }, [dailyChallenges]);

  const createChallenge = (input: string) => {
    addDailyChallenge(challenges.length, input);
  };

  const mapChallenges = () => {
    return challenges.map((challenge: IDailyChallenge) => {
      return {
        id: challenge.id,
        item: challenge.challenge,
        completed: challenge.completed,
      }
    })
  }

  return (
    <StyledChallengesContainer>
      <ItemList items={mapChallenges()} updateItem={updateChallengeCompleted} deleteItem={deleteDailyChallnge} />
      <StyledAddChallengeContainer>
        <InputField callback={createChallenge}/>
      </StyledAddChallengeContainer>
    </StyledChallengesContainer>
  );
};
export default Challenges;
