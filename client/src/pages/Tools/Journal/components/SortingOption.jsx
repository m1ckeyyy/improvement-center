import { useJournalContext } from './../Journal'; // Update the path accordingly
import styles from './../Journal.module.scss';

export const SortingOption = ({ type, icon, label, orderLabels }) => {
  const { sortingData, setSortingData } = useJournalContext();

  const triggerSortingMode = (mode) => () => {
    setSortingData((prev) => ({
      mode: mode,
      sortOrderRising: prev.mode === mode ? !prev.sortOrderRising : true,
    }));
  };

  return (
    <div className={`${styles.sortMenuElement} ${sortingData.mode === type ? styles.highlight : ''}`} onClick={triggerSortingMode(type)}>
      {icon}
      <span>
        {label} <p>{sortingData.mode === type ? (sortingData.sortOrderRising ? orderLabels[0] : orderLabels[1]) : ''} </p>
      </span>
    </div>
  );
};
