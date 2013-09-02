class CreateGalinhas < ActiveRecord::Migration
  def change
    create_table :galinhas do |t|
      t.integer :galinha_id
      t.string :nome
      t.string :raca

      t.timestamps
    end
    
    add_index :galinhas, :galinha_id, :unique => true
  end
  
  def up
    change_column :galinha, :galinha_id, :primary_key
  end
end
