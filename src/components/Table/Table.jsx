import PropTypes from 'prop-types';
import MDBox from 'components/MDBox';
import Styles from './Table.module.scss';
// import { v4 } from "uuid";

function Table({ questions }) {
  return (
    <MDBox sx='100%'>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Right Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions?.map(question => (
            <tr key={question.id}>
              <td>{question?.id}</td>
              <td>
                <img src='' alt='' />
                {question?.name}
              </td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla?</td>
            </tr>
          ))}
          {/* <tr>
            <td>2</td>
            <td>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae labore quaerat ratione
              porro error maxime quod consectetur corrupti aliquid! Ut nostrum asperiores atque ex
              ipsam.
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr> */}
          {/* <tr>
            <td>3</td>
            <td>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, recusandae!
              Reiciendis quae atque facilis numquam commodi mollitia voluptatum quod placeat veniam,
              totam, eaque, exercitationem officiis asperiores error itaque a maxime tempora
              reprehenderit consectetur dolorum eum illo magnam ipsam architecto. Quos dolor quasi
              saepe harum. Iusto atque beatae voluptates exercitationem a.
            </td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, provident?</td>
          </tr> */}
        </tbody>
      </table>
    </MDBox>
  );
}

Table.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
