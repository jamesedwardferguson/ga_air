module ReservationsHelper

  def seat_name(reservation)
  seat_letter = ('A'..'Z').to_a[reservation.res_col - 1]
  "#{reservation.res_row.to_s+' '+seat_letter}"
  end

end
