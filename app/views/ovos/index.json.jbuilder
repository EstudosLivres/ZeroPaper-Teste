json.array!(@ovos) do |ovo|
  json.extract! ovo, :ovo_id, :galinha_id, :cor_branco
  json.url ovo_url(ovo, format: :json)
end
