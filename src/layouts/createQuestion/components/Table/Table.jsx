import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import Styles from './Table.module.scss';
// import ViewQuestion from '../ViewQuestion/ViewQuestion';
import Form from '../Form';
// import { v4 } from "uuid";

function Table({ questions, pagination, categoryId }) {
  const [openId, setOpenId] = useState({});

  const handleOpen = data => setOpenId(data);
  const handleClose = () => setOpenId(null);
  return (
    <MDBox sx='100%'>
      <ModalComp status={openId?.id ? true : false} onClose={handleClose}>
        {/* <ViewQuestion question={openId} /> */}
        <Form
          formType='view'
          categoryId={categoryId}
          pagination={pagination}
          questionNumber={1}
          onClose={handleClose}
          questionData={openId}
        />
      </ModalComp>
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
            <tr key={question.id} onClick={() => handleOpen(question)}>
              <td>{question?.id}</td>
              <td>
                <img src='' alt='' />
                {question?.name}
              </td>
              <td>{question?.choices?.filter(choice => choice.correct)[0]?.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MDBox>
  );
}

Table.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  pagination: PropTypes.object,
  categoryId: PropTypes.number,
};

export default Table;
