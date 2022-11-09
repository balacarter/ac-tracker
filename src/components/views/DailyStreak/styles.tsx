import styled from 'styled-components';

export const StyledDailyStreak = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.8rem 2rem 1rem 2rem;
  border-style: solid;
  border-width: 1px;
`
export const StyledStreakDotContainer = styled.div<{ $checked: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;
  padding-top: 1rem;
  padding-bottom: 0.25rem;
`

export const StyledTodaySpan = styled.div`
  font-size: 10px;
  font-weight: 500;
`