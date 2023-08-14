import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default BaseTemplate;
