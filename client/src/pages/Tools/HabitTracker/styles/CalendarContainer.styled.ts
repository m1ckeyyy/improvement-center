import styled from 'styled-components';

export const CalendarContainer = styled.div`
  /* max-width: 700px; */
  width: 100%;
  height: 100%;
  background-color: #d4f7d4;
  background: linear-gradient(45deg, #1f6feb, #031d27);
  color: white;
  padding: 15px;
  border-radius: 15px;

  .react-calendar__navigation {
    display: flex;
    padding-bottom: 30px;

    .react-calendar__navigation__label {
      font-weight: bold;
      flex-grow: 0 !important;
      padding: 0 20px;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  .react-calendar__month-view__weekdays {
    padding-left: 3px;
    padding-right: 3px;
    margin-bottom: 15px;
    text-align: center;
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px 40px;

    abbr {
      text-decoration: none;
      outline: 0;
      font-size: 1.9em;
    }
  }
  button {
    margin: 3px;
    background-color: #5d79bc;
    font-size: 1.3em;
    cursor: pointer;
    border: 0;
    color: white;
    padding: 15px 0;
    border-radius: 5px;
    &:hover {
      background-color: #3666db;
    }

    &:active {
      background-color: #4e74cf;
      background-color: lightgray;
      color: black;
    }
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* gap: 10px 1.5%; */
    gap: 25px 1.5%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px lightgray;
    background-color: #ffffffe3 !important;
    color: black;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
      grid-template-rows: 53% 53% 53% 53%;
    }
    &.react-calendar__decade-view__years {
      grid-template-columns: 50% 50%;
      grid-template-rows: 33% 33% 33% 33% 33%;
    }
    &.react-calendar__century-view__decades {
      grid-template-columns: 50% 50%;
      grid-auto-rows: 33%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
