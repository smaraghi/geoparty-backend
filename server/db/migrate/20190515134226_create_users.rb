class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.text :bio
      t.string :avatar

      t.integer :total_questions, default: 0
      t.integer :correct_answers, default: 0

      t.timestamps
    end
  end
end
