json.galinhas(@galinhas) do |json, galinha|
	json.extract! galinha, :galinha_id, :nome, :raca
	json.url galinha_url(galinha, format: :json)
end