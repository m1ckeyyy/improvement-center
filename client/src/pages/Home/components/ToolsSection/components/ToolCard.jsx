import styles from './../ToolsSection.module.scss';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from 'react-icons/bs';

export function ToolCard({ title, description, imageSrc, imageClassName, link }) {
  return (
    <div className={styles.tool}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Link to={link}>
        <img src={imageSrc} alt={title} className={imageClassName} />
      </Link>

      <Link to={link} className={styles.hyperlink}>
        Go To {title} <BsArrowUpRightSquare size="22" />
      </Link>
    </div>
  );
}
