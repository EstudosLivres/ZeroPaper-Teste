class CreateGalinhas < ActiveRecord::Migration
  def change
    create_table :galinhas do |t|
      t.integer :galinha_id
      t.string :nome
      t.string :raca

      t.timestamps
    end
  end
end
