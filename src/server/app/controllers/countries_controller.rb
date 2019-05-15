class CountriesController < ApplicationController 

  def index 
    @countries = Country.all
    render json: @countries 
  end
  
  def display_country
    @country = Country.find_by(name: params[:name])
    render json: @country
  end
end
