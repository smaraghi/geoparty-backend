
require 'open-uri'

class QuestionsController < ApplicationController

  def get_trivia
    amount = 100
    category = 22
    difficulty = 'medium'
    type = 'multiple'
    req = open("https://opentdb.com/api.php?amount=#{amount}&category=#{category}&difficulty=#{difficulty}&type=#{type}")
    body = req.read

    render json: body
  end

end
