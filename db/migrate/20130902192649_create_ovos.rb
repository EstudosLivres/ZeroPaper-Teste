class CreateOvos < ActiveRecord::Migration
  def change
    create_table :ovos do |t|
      t.integer :ovo_id
      t.integer :galinha_id
      t.boolean :cor_branco

      t.timestamps
    end
    
    add_index :ovos, :ovo_id, :unique => true
  end
  
  def up
    change_column :ovo, :ovo_id, :primary_key
  end
end
