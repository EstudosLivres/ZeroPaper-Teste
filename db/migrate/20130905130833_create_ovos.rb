class CreateOvos < ActiveRecord::Migration
  def change
    create_table :ovos do |t|
      t.integer :ovo_id
      t.integer :galinha_id
      t.boolean :cor_branco

      t.timestamps
    end
  end
end
