class GalinhasController < ApplicationController
  before_action :set_galinha, only: [:show, :edit, :update, :destroy]

  # GET /galinhas
  # GET /galinhas.json
  def index
    @galinhas = Galinha.all
  end

  # GET /galinhas/1
  # GET /galinhas/1.json
  def show
  end

  # GET /galinhas/new
  def new
    @galinha = Galinha.new
  end

  # GET /galinhas/1/edit
  def edit
  end

  # POST /galinhas
  # POST /galinhas.json
  def create
    @galinha = Galinha.new(galinha_params)

    respond_to do |format|
      if @galinha.save
        format.html { redirect_to @galinha, notice: 'Galinha was successfully created.' }
        format.json { render action: 'show', status: :created, location: @galinha }
      else
        format.html { render action: 'new' }
        format.json { render json: @galinha.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /galinhas/1
  # PATCH/PUT /galinhas/1.json
  def update
    respond_to do |format|
      if @galinha.update(galinha_params)
        format.html { redirect_to @galinha, notice: 'Galinha was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @galinha.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /galinhas/1
  # DELETE /galinhas/1.json
  def destroy
    @galinha.destroy
    respond_to do |format|
      format.html { redirect_to galinhas_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_galinha
      @galinha = Galinha.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def galinha_params
      params.require(:galinha).permit(:galinha_id, :nome, :raca)
    end
end
