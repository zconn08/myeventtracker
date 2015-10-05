class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :occasion, null: false
      t.integer :invited_count, null: false
      t.date :date, null: false
      t.boolean :cancelled
      t.timestamps null: false
    end
  end
end
