class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :body
      t.string :solution
      t.string :choices

      t.timestamps
    end
  end
end
