class CitiesController < ApplicationController
    def index
        cities = City.all
        render json: CitySerializer.new(cities)
    end

    def show
        city = City.find_by(id: params[:id])
        render json: CitySerializer.new(city)
        
    end

    def create
        State.find_by(id: params[:id])
        city = City.new(city_params)
        city.save
        render json: CitySerializer.new(city)
    end

    def update
        city = City.find_by(id: params[:id])
        city.update(city_params)
        render json: CitySerializer.new(city)
    end

    def destroy
        city = City.find_by(id: params[:id])
        city.destroy
        render json: city
    end

    private

    def city_params
        params.require(:city).permit(:name,:zipcode,:title,:description,:state_id)
    end
end
