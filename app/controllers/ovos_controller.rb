class OvosController < ApplicationController
  before_action :set_ovo, only: [:show, :edit, :update, :destroy]

  # GET /ovos
  # GET /ovos.json
  def index
    @ovos = Ovo.all
  end

  # GET /ovos/1
  # GET /ovos/1.json
  def show
  end

  # GET /ovos/new
  def new
    @ovo = Ovo.new
  end

  # GET /ovos/1/edit
  def edit
  end

  # POST /ovos
  # POST /ovos.json
  def create
    @ovo = Ovo.new(ovo_params)

    respond_to do |format|
      if @ovo.save
        format.html { redirect_to @ovo, notice: 'Ovo was successfully created.' }
        format.json { render action: 'show', status: :created, location: @ovo }
      else
        format.html { render action: 'new' }
        format.json { render json: @ovo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ovos/1
  # PATCH/PUT /ovos/1.json
  def update
    respond_to do |format|
      if @ovo.update(ovo_params)
        format.html { redirect_to @ovo, notice: 'Ovo was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @ovo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ovos/1
  # DELETE /ovos/1.json
  def destroy
    @ovo.destroy
    respond_to do |format|
      format.html { redirect_to ovos_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ovo
      @ovo = Ovo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ovo_params
      params.require(:ovo).permit(:ovo_id, :galinha_id, :cor_branco)
    end
end
