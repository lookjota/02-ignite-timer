import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status statusColor="yellow">Andamento</Status>
              </td>
            </tr>{' '}
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>{' '}
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status statusColor="gray">vazio</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
