import Text from 'src/UI/base/Text';
import { Columns, Dates, Title } from './styled';

export const CVEducation = () => {
  return (
    <>
      <Title>
        <Text>Education</Text>
      </Title>

      <Columns mb={4}>
        <div>
          <Dates>
            <Text>2017/01 - 2019/11</Text>
          </Dates>
        </div>
        <div>
          <h6>
            <Text>IFPI - Instituto Federal do Piauí</Text>
          </h6>
          <p>
            <Text>Ensino Superior, Análise de Sistemas de Computação.</Text>
          </p>
        </div>
      </Columns>

      <Columns mb={4}>
        <div>
          <Dates>
            <Text>2018/08 - 2020/01</Text>
          </Dates>
        </div>
        <div>
          <h6>
            <Text>Centro Estadual de Educação Profissional Professora Maria Amália</Text>
          </h6>
          <p>
            <Text>Ensino Médio, Técnico em Informatica.</Text>
          </p>
        </div>
      </Columns>
    </>
  );
};
