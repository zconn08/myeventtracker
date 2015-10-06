class AddOrd < ActiveRecord::Migration
  def change
    add_column :events, :ord, :integer
  end
end
