import React from "react";
import ProductService from "../../Products.service";

const styles = require("./ColumnLeft.module.css");

interface Props {
  radio: string;
  changeRadio: (e: string) => void;
  name: string;
  changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
}

const ColumnLeft: React.FC<Props> = (props) => {
  let manufacturers = ProductService.getManufacturers();

  return (
    <div className={styles.column_left}>
      <div className={styles.filter}>
        <div className={styles.filter_header}>
          <h4>Search</h4>
          <span onClick={props.clear} className={styles.clear}>
            Clear
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            onChange={props.changeName}
            value={props.name}
          />
        </div>
        <h4>Manufacturer</h4>
        <div>
          {manufacturers.map((e) => {
            return (
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id={e}
                  value={e}
                  checked={props.radio === e}
                  onChange={() => {
                    props.changeRadio(e);
                  }}
                />
                <label>{e}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
// for={e}
export default ColumnLeft;
