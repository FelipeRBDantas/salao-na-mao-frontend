import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import types from '../../store/modules/agendamento/types';

import { filterAgendamentos } from '../../store/modules/agendamento/actions';

import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';

import util from '../../util';

const localizer = momentLocalizer(moment);

const Agendamentos = () => {
  const dispatch = useDispatch();

  const { agendamentos } = useSelector((state) => state.agendamento);

  const formatEventos = agendamentos.map((agendamento) => ({
    title: `${agendamento.servicoId.titulo} - ${agendamento.clienteId.nome} - ${agendamento.colaboradorId.nome}`,
    start: moment(agendamento.data).toDate(),
    end: moment(agendamento.data)
      .add(
        util.hourToMinutes(
          moment(agendamento.servicoId.duracao).format('HH:mm')
        ),
        'minutes'
      )
      .toDate(),
  }));

  useEffect(() => {
    dispatch(
      filterAgendamentos(
        moment().weekday(0).format('YYYY-MM-DD'),
        moment().weekday(6).format('YYYY-MM-DD')
      )
    );
  }, [dispatch]);

  return (
    <div className="col p-5 overflow-auto h-100">
      <div classname="row">
        <div classname="col-12">
          <h2 classname="mb-4 mt-0">Agendamentos</h2>
          <div>
            <Calendar
              localizer={localizer}
              events={formatEventos}
              defaultView='week'
              selectable
              popup
              style={{ height: 600 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agendamentos;
