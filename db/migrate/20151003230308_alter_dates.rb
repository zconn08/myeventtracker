class AlterDates < ActiveRecord::Migration
  def change
    remove_column :events, :date
    add_column :events, :year, :integer
    add_column :events, :month, :integer
    add_column :events, :day, :integer
  end
end
